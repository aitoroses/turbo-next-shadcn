import { createContext, useContext } from "react";
import { CreateExample } from "@/application/CreateExample";
import { ExampleRepositoryImpl } from "@/infrastructure/ExampleRepositoryImpl";

const CreateExampleContext = createContext<CreateExample>(new CreateExample(new ExampleRepositoryImpl()));

export function useCreateExample() {
    return useContext(CreateExampleContext) ;

}