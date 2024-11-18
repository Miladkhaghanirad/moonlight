import { Client ,Account,ID} from 'react-native-appwrite';
export const appwriteConfig ={
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.itechway.moonlight',
    projectId: '673a8819003811edd24e',
    databaseId: '673a8d34002b4fccf321',
    userCollectionId: '673a8d82003382f598a8',
    videoCollectionId: '673a8db300128da09561',
    storageId: '673a8f5100156de8a0a9'
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.

    const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'Khaghanim2@gmail.com', '$Milad-1365', 'Milad Khaghanirad')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}