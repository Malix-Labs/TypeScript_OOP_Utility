export type Constructor<Class extends object = object, Arguments extends any[] = any[]> = new (...args: Arguments) => Class;
