# Schema Plan for TimeWise

## Overview
This schema is designed to support the TimeWise application features:
1. **One-click Timer**: Needs `time_entries` with start/end times.
2. **Project Categorization**: Needs `projects` table.
3. **Time Reports**: Aggregation on `time_entries` linked to `projects` and `clients`.
4. **Invoice Generation**: Needs `invoices`, `invoice_items`, and `clients`.

## Tables

### 1. profiles
Extension of Supabase Auth Users.
- **id** (uuid, PK): References `auth.users.id`.
- **full_name** (text): User's display name.
- **avatar_url** (text): Profile picture URL.
- **default_hourly_rate** (numeric): Default rate for new projects/clients.
- **currency** (text): Preferred currency code (e.g., 'USD').
- **created_at** (timestamptz).
- **updated_at** (timestamptz).

### 2. clients
Entities the user bills.
- **id** (uuid, PK).
- **user_id** (uuid, FK): References `profiles.id`.
- **name** (text): Client name (Company or Individual).
- **email** (text): Contact email.
- **address** (text): Billing address.
- **created_at** (timestamptz).
- **updated_at** (timestamptz).

### 3. projects
Categories for time tracking.
- **id** (uuid, PK).
- **user_id** (uuid, FK): References `profiles.id`.
- **client_id** (uuid, FK, nullable): References `clients.id`.
- **name** (text): Project title.
- **color** (text): Hex code for UI tags.
- **hourly_rate** (numeric, nullable): Specific rate for this project (overrides default).
- **is_archived** (boolean): Soft delete mechanism.
- **created_at** (timestamptz).
- **updated_at** (timestamptz).

### 4. time_entries
The core tracking data.
- **id** (uuid, PK).
- **user_id** (uuid, FK): References `profiles.id`.
- **project_id** (uuid, FK, nullable): References `projects.id`.
- **description** (text): What was worked on.
- **start_time** (timestamptz): When the timer started.
- **end_time** (timestamptz, nullable): NULL if currently running.
- **duration** (integer): Duration in seconds (useful for manual entry or caching).
- **is_billable** (boolean): Default true.
- **created_at** (timestamptz).
- **updated_at** (timestamptz).

### 5. invoices
Generated bills.
- **id** (uuid, PK).
- **user_id** (uuid, FK): References `profiles.id`.
- **client_id** (uuid, FK): References `clients.id`.
- **invoice_number** (text): Sequential or custom ID (e.g., "INV-001").
- **status** (text): Enum ('draft', 'sent', 'paid', 'void').
- **issue_date** (date).
- **due_date** (date).
- **total_amount** (numeric): Cached total.
- **notes** (text): Footer notes.
- **created_at** (timestamptz).
- **updated_at** (timestamptz).

### 6. invoice_items
Line items for an invoice.
- **id** (uuid, PK).
- **invoice_id** (uuid, FK): References `invoices.id`.
- **description** (text).
- **quantity** (numeric): Hours or count.
- **unit_price** (numeric): Rate per unit.
- **amount** (numeric): quantity * unit_price.
- **time_entry_id** (uuid, FK, nullable): Optional link back to source entry to prevent double-billing.
- **created_at** (timestamptz).

## Relationships
- **Users (Profiles)** own everything (`user_id` FK on all tables).
- **Clients** have many **Projects**.
- **Projects** belong to one **Client** (optional).
- **Time Entries** belong to one **Project** (optional).
- **Invoices** belong to one **Client**.
- **Invoice Items** belong to one **Invoice**.

## Security (RLS)
- **Policy**: `Users can view and edit own data`.
- All tables must have RLS enabled.
- `USING (auth.uid() = user_id)` for all CRUD operations.

## Automation / Triggers
- `handle_new_user`: Automatically create a profile row when a new user signs up via Supabase Auth.
- `update_updated_at`: Automatically update `updated_at` column on modification.
