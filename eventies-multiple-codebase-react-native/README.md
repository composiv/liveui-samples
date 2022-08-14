# eventies-multiple-codebase-react-native

This application is an implementation of [Multiple Codebase for React Native](https://liveui.composiv.ai/docs/multiple-codebase-react-native).

---

This example consists of 3 applications. The host application which called `eventies` consumes `simple-login` and `eventies-components`. 

Clone the samples repo using the following command:
```command
git clone https://github.com/eclipse-muto/samples
```

## Starting the Host Application - eventies

Move to the host application directory:
```command
cd samples/eventies-multiple-codebase-react-native/eventies
```

Install required packages:
```command
npm install
```

For IOS:
```command
npx pod-install
npm run ios
````

For Android:
```command
npm run android
```

Start Metro Bundler:
```command
npm start
```

## simple-login

This application is a traditional react-native application and can be run as follows:
```command
cd samples/eventies-multiple-codebase-react-native/simple-login
npm install
```

For IOS:
```command
npx pod-install
npm run ios
````

For Android:
```command
npm run android
```

Start Metro Bundler:
```command
npm start
```
> The command above will also run the remote component that has specified on the liveui.config file.

To run remote component only:
```command
npm run start-live
```
> This command was defined on the `scripts/package.json` and runs `@eclipse-muto/liveui start-native` command. For more information about LiveUI CLI commands, please check [it's documentation](https://liveui.composiv.ai/docs/liveui).

## eventies-components

This application is a traditional react-native application and can be run as follows:
```command
cd samples/eventies-multiple-codebase-react-native/eventies-components
npm install
```

For IOS:
```command
npx pod-install
npm run ios
````

For Android:
```command
npm run android
```

Start Metro Bundler:
```command
npm start
```
> The command above will also run the remote component that has specified on the liveui.config file.

To run remote component only:
```command
npm run start-live
```
> This command was defined on the `scripts/package.json` and runs `@eclipse-muto/liveui start-native` command. For more information about LiveUI CLI commands, please check [it's documentation](https://liveui.composiv.ai/docs/liveui).

## License

This project is licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for the full license text.