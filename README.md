Hi! I'm trying to make [TailwindCSS](https://tailwindcss.com/) play nicely with [MUI](https://mui.com/). 

The problem I'm facing is a different behaviour between development and production. Take this:

```
import Skeleton from '@mui/material/Skeleton'
<Skeleton className="w-20 h-20" variant="circular" />
```

On **development**, Tailwind gets higher priority (is injected later, I assume), so it overwrites hardcoded MUI styles. That is the way I would prefer (especially as it seems that [one can not remove CSS rules in current version of MUI](https://stackoverflow.com/questions/64818441/remove-css-rule-for-material-ui-component-in-theme-overrides)).

<img width="991" alt="Screenshot 2021-12-16 at 12 00 56" src="https://user-images.githubusercontent.com/3989833/146359943-448e13fc-1845-4d95-af63-4b3eb724995c.png">

On **production**, MUI (resp. emotion) takes over, which slaps `height: 1.2rem` over the Skeleton and squishes it.

<img width="1132" alt="Screenshot 2021-12-16 at 12 01 46" src="https://user-images.githubusercontent.com/3989833/146360034-64e1543c-f6aa-4198-936c-a165fdbf9753.png">

So yeah, not the best dev experience. :) Just imagine the number of bugs you find out *only after you deploy the thing*. 

[I've created the repo where you can reproduce the problem](https://github.com/cibulka/reproduction-next-tailwind-mui). You know the drill:

```
npm install
npm run dev # development
npm run build && npm run start # production
```

Is this expected behaviour? Can I regulate this somehow (e.g. give Tailwind bigger priority)? 

Also I assume that out of the three, I should ask those questions to Next.js, as it does the CSS importing.

Thank you!