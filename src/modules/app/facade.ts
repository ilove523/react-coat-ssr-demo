import {ModuleNames} from "modules/names";
import {exportModule} from "react-coat-pkg";
import {ModuleActions, State} from "./model";

export type ModuleState = State;

export default exportModule<ModuleActions>(ModuleNames.app);
