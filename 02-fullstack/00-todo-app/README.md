# React + Typescript Todo!
A Todo made with `React + Typescript` and `MongoDB Atlas` as database
This Todo was made according to @midudev course while I was watching the class

I got to clarify that the persistence of this project is made separed in a separed project, I mean that I have Backend and Frontend. But I'll be using that service also made by me! But I'll leave two versions here, one without persistence and other with!

## Get started
- Clone repository!
```
git clone "url-repository"
```

- Move to corresponding directory of the app
```cmd
cd todo-app-no-persistence-carloscabir | todo-app-persistence-carloscabir 
```

---

### For Front-end

- Running Frontend in your desktop! *(if needed to move to frontend)*
```cmd
cd /frontend
npm start
```

---

### For Back-end

- Set your MongoDB Atlas credentials in a `.dotenv` file 
#### .dotenv
```
MONGO_URI=<your-uri>
```

- Running backend in your desktop!
```cmd
cd /backend
npm start
```