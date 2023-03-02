import { Example } from "./Example";

export interface ExampleRepository {
    create(name: string): Promise<Example>;
}