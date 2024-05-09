export type Workout = {
    name: string;
    calories: number;
    duration: string;
    imageUrl: string;
    exercises: Exercise[]
}

export type Exercise = {
    name: string,
    description: string,
    imageUrl: string,
}