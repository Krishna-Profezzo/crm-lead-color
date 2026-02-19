# Lead Gender App

A Frappe v15 app that adds gender field to Lead with color-coded status pills.

## Features

- Adds three custom fields to Lead doctype:
  - Name (Data field)
  - Age (Int field)
  - Gender (Select field with options: Male, Female)
- Client script that changes status pill color based on gender:
  - Blue for Male
  - Pink for Female

## Installation

1. Install the app using bench:
   ```bash
   bench get-app https://github.com/Krishna-Profezzo/crm-lead-color.git
   bench --site [sitename] install-app lead_gender
   ```

2. Or install from local source:
   ```bash
   bench get-app /path/to/lead_gender
   bench --site [sitename] install-app lead_gender
   ```

## Usage

1. After installation, the Lead form will have three new fields: Name, Age, and Gender.
2. When you select "Male" in the Gender field, the status pill will turn blue.
3. When you select "Female" in the Gender field, the status pill will turn pink.

## Development

To contribute to this app:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT