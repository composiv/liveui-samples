# todo-single-codebase-react-native

[This application](https://github.com/composiv/liveui-samples/todo-single-codebase-react-native) is an implementation of [Single Codebase for React Native](https://liveui.composiv.ai/docs/single-codebase-react-native).

---

Clone the samples repo using the following command:
```command
git clone https://github.com/composiv/liveui-samples
```

Move to the appropriate directory: 
```command
cd samples/todo-single-codebase-react-native
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
```
npm start
````

Start serving remote components:
```
npm run start:live
```
> This command was defined on the `scripts/package.json` and runs `@composiv/liveui start-native` command. For more information about LiveUI CLI commands, please check [it's documentation](https://liveui.composiv.ai/docs/liveui).

## License

This project is licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for the full license text.