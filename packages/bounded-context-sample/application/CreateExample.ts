import { Example } from "../domain/Example";
import { ExampleRepository } from "../domain/ExampleRepository";

export class CreateExample {

    constructor(private readonly exampleRepository: ExampleRepository) {
        this.exampleRepository = exampleRepository;
    }

    async execute(name: string): Promise<Example> {
        let validName = name.trim();
        return await this.exampleRepository.create(validName);
    }
}