import re

def validate_provider_segment(provider_segment):
    errors = []

    # Validate NPI number (must be a 10-digit numeric value)
    npi_number = provider_segment.get('NM109', '')
    if not re.match(r'^\d{10}$', npi_number):
        errors.append(f"Invalid NPI number: {npi_number}")

    # Validate Address (N3 and N4 segments)
    address_line = provider_segment.get('N3', '')
    city_state_zip = provider_segment.get('N4', '')

    if not address_line:
        errors.append("Address line (N3) is missing")

    if city_state_zip:
        city_state_zip_pattern = r'^[A-Za-z\s]+,\s*[A-Z]{2}\s*\d{5}(-\d{4})?$'
        if not re.match(city_state_zip_pattern, city_state_zip):
            errors.append(f"Invalid city, state, or ZIP code: {city_state_zip}")
    else:
        errors.append("Geographic location (N4) is missing")

    # Return the errors list, empty list if no errors found
    return errors

# Example usage
provider_segment = {
    'NM109': '1234567890',  # Example NPI
    'N3': '123 Main Street',  # Example Address
    'N4': 'Philadelphia, PA 19104-1234'  # Example City, State, ZIP
}

errors = validate_provider_segment(provider_segment)
if errors:
    for error in errors:
        print(error)
else:
    print("Provider segment is valid.")
