# Add steps/actions here:

Step 1
    Run terraform init

Step 2
Edit main.tf to refactor resource values so the value for resource "index 1" is changed from "file 1" to "null"

The remaining index values are left as is

Step 3
    Run "terraform validate" to check for any errors

Step 4
    Run "terraform plan" to show changes to be applied

Step 5
    Run "terraform "apply" to apply / commit the changes

Step 6
    Check "terraform.tfstate" to show if resource is removed and compare with "terraform.tfstate.backup" to confirm the changes