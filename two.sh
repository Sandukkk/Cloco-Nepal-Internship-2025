#!/bin/bash

#Directory Management

echo "Make a directory"
read new_dir

if [ ! -d "$new_dir" ]
then
    echo "File doesn't exist, create new"
    mkdir -p "$new_dir"
    echo "new file created."
else
    echo "file exists."
fi

#----------------------------------------------------
#User and Group Management

group_name="developers"
user_name="intern_user"

# Create the group if it doesn't exist
echo "Creating group"
sudo groupadd $group_name 2>/dev/null || echo "Group already exists."

# Create the user if it doesn't exist
echo "Creating user"
if id "$user_name" &>/dev/null; then
    echo "User already exists."
else
    sudo useradd -m -s /bin/bash -G $group_name $user_name #assign bash
    echo "User '$user_name' created."
fi


# Set a default password for the user
echo "Setting password for $user_name"
echo "$user_name:123456" | sudo chpasswd
echo "Password set for '$user_name'."

# Verification of user in the group
echo "User '$user_name' belongs to groups:"
groups $user_name

#---------------------------------------------------------------------------------------
#Permissions and Ownership 

dir_path="/home/sandhya/project_files"
welcome_file="$dir_path/welcome.txt"

# Ensure that the directory exists
mkdir -p "$dir_path"


# Change the ownership of the directory (requires sudo)
sudo chown -R "$user_name:$group_name" "$dir_path"

# Set appropriate permissions for the directory
chmod 750 "$dir_path"

# Ensure the welcome file exists before using `stat`
touch "$welcome_file"

# Now, change ownership of the welcome file
sudo chown "$user_name:$group_name" "$welcome_file"

# Creating a welcome file with required details
echo "Creating welcome file"
echo -e "Welcome File\nCreated on: $(date)\ndirectory path: $dir_path\nOwner: $(stat -c "%U" "$dir_path")\nGroup: $(stat -c "%G" "$dir_path")" > "$welcome_file"

echo "Setting file permissions"
chmod 750 "$welcome_file"

# Display file contents for verification
echo "Welcome file contents:"
cat "$welcome_file"

echo "------------------"
echo "Changing welcome.txt's user ownership to intern_user...."
sudo chown -v intern_user $welcome_file
echo "welcome.txt's user ownership updated successfully...."
echo -e "------------------\n"

## Change welcome.txt file's group ownership
echo "------------------"
echo "Changing welcome.txt's group ownership to developers...."
sudo chgrp -v developers $welcome_file
echo "welcome.txt's group ownership updated successfully...."
echo -e "------------------\n"
