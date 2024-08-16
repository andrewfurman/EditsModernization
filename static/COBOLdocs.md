**COBOL Docs: ValidateProviderSegment**

## Overview

The `ValidateProviderSegment` COBOL program is designed to validate specific segments of an 837 transaction, focusing on the National Provider Identifier (NPI) and address fields. This program ensures that the NPI number is correctly formatted and that the provider's address includes the necessary city, state, and ZIP code details.

## Data Division

### Working-Storage Section

The following variables are defined in the `WORKING-STORAGE SECTION`:

- **WS-NPI-NUMBER**: Holds the 10-character NPI number for validation.
  - **Type**: `PIC X(10)`
- **WS-ADDRESS-LINE**: Stores the provider's address line.
  - **Type**: `PIC X(50)`
- **WS-CITY-STATE-ZIP**: Contains the city, state, and ZIP code information for the provider.
  - **Type**: `PIC X(50)`
- **WS-ERRORS**: An array to track errors found during validation.
  - **WS-ERROR-COUNT**: Counter for the number of errors.
    - **Type**: `PIC 9(2)`
  - **WS-ERROR-MESSAGE**: Array to store error messages.
    - **Type**: `PIC X(80)` (occurs 10 times)

## Procedure Division

### 1. Initialize Errors (`INITIALIZE-ERRORS`)
This section initializes the error counter (`WS-ERROR-COUNT`) to `0` and clears any previous error messages stored in `WS-ERROR-MESSAGE`.

**Code**:
```cobol
PERFORM INITIALIZE-ERRORS
```

### 2. Validate NPI Number (`VALIDATE-NPI`)
This section validates the NPI number to ensure that:
- It is numeric.
- It has exactly 10 digits.

If the NPI number does not meet these criteria, an error message is added to `WS-ERROR-MESSAGE`.

**Code**:
```cobol
PERFORM VALIDATE-NPI
```

### 3. Validate Address (`VALIDATE-ADDRESS`)
This section validates the address information:
- It checks if the `WS-ADDRESS-LINE` is not empty.
- It ensures that the `WS-CITY-STATE-ZIP` is properly formatted, including the city, 2-character state code, and 5- or 9-digit ZIP code.

If these conditions are not met, appropriate error messages are added to `WS-ERROR-MESSAGE`.

**Code**:
```cobol
PERFORM VALIDATE-ADDRESS
```

### 4. Display Errors (`DISPLAY-ERRORS`)
This section displays all the errors found during validation. If no errors are found, it displays a message indicating that the provider segment is valid.

**Code**:
```cobol
PERFORM DISPLAY-ERRORS
```

## Example Usage

The program would be used in an environment where provider segment data (such as NPI number and address) is processed to ensure compliance with standard formatting and content rules before further processing.

### Example Input
- `WS-NPI-NUMBER`: `1234567890` (valid NPI)
- `WS-ADDRESS-LINE`: `123 Main Street`
- `WS-CITY-STATE-ZIP`: `Philadelphia, PA 19104-1234`

### Expected Output
Since the NPI and address are correctly formatted, the output would be:
```
Provider segment is valid.
```

## Additional Notes

- **Pattern Matching**: COBOL does not support regular expressions natively. The validation logic for `WS-CITY-STATE-ZIP` is simplified and would need to be implemented with custom parsing logic if required.
- **Error Handling**: The program uses a simple array to store up to 10 error messages. This can be extended as needed.

## Conclusion

This COBOL program provides a basic structure for validating essential fields in a provider segment within an 837 transaction. It can be extended or modified to include additional checks and handle more complex validation requirements.