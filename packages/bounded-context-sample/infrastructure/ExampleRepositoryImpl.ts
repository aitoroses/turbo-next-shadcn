import { Example } from "../domain/Example";
import { ExampleRepository } from "../domain/ExampleRepository";

export class ExampleRepositoryImpl implements ExampleRepository {
    async create(name: string): Promise<Example> {
        return new Example(Date.now().toString(), name);
    }
   
}