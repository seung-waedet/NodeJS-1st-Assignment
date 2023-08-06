const fs = require('fs')
const path = require('path')

// Create a folder
const folderName = 'Students';

// Use fs.mkdir() to create the folder
fs.mkdir(folderName, (err) => {
    if (err) {
        console.error('Error creating folder:', err);
    } else {
        console.log('Folder created successfully!');
    }
});


// Writing a file asynchronously
const textFilePath = path.join(__dirname, 'Students', 'user.js')
const content = ''

// File gets created in the file system because it does not exist yet
fs.writeFile(textFilePath, content, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File written successfully')
})


// Updating a file asynchronously
const textFilePath = path.join(__dirname, 'Students', 'user.js')
const content = 'Seung-wa Akpan'

fs.writeFile(textFilePath, content, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File written successfully')
})


// Rename a folder
const oldName = path.join(__dirname, 'Students');
const newName = path.join(__dirname, 'Names');

fs.rename(oldName, newName, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`Directory renamed to ${newName}`);
});


// Append to a file
const textFilePath = path.join(__dirname, 'Names', 'user.js')
const content = 'Seung-wa Akpan'

const additionalInfo = `
Age: 20
Sex: Male
Nationality: Nigerian
Phone: 080000111100
Hobbies: Reading books
`;

fs.appendFile(textFilePath, additionalInfo, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('Addition to file success!')
})


// Rename file to Seungwa_Akpan
const textFilePath = path.join(__dirname, 'Names', 'user.js')
const content = 'Seung-wa Akpan'

const oldFilePath = path.join(__dirname, 'Names', 'user.js');
const newName = 'Seungwa_Akpan';
const newFilePath = path.join(__dirname, 'Names', `${newName}.js`);

fs.rename(oldFilePath, newFilePath, (err) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(`File renamed to ${newFilePath}`);
});


// Read from file
const FilePath = path.join(__dirname, 'Names', 'Seungwa_Akpan.js')

fs.readFile(FilePath, 'utf8', (err, data) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File read successfully')
    console.log(data)
})


// Deleting a file
const filePath = path.join(__dirname, 'Names', 'Seungwa_Akpan.js')

fs.rm(filePath, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File deleted successfully')
})


// Delete a folder
const emptyFolder = path.join(__dirname, 'Names');

fs.rmdir(emptyFolder, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('Directory deleted successfully');
});