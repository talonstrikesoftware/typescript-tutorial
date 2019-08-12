//video 23 - more on annotatinos around functions

// return type inferred - Don't do this
const add = (a: number, b: number) => {
    return a + b;
};

// return type specified
// arrow function
const subtract = (a: number, b: number): number => {
    return a - b;
};

// named function
function divide(a: number, b: number): number {
    return a/b;
};

// anonymous function
const multiply = function(a: number, b: number): number {
    return a * b;
}

// void return can return null or undefined (technically)
const logger = (message: string): void => {
    console.log(message);
}

// could annotate function would never return anything
const throwError = (message: string): never => {
    throw new Error(message);
}

// video 27 - Destructuring with Annotations
const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
};

// before
// const logWeather = (forecast: { date: Date, weather: string}): void => {
//     console.log(forecast.date);
//     console.log(forecast.weather);
// };

// after destructuring
const logWeather = ({date, weather}: { date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
};

logWeather(todaysWeather);
