import  * as model from '../model/model.js'
import  * as validations from '../model/ValidationStrategies/strats.js'
import * as generators from '../model/BoradDTOGenerators/generators.js'
import * as views from '../view/view.js'
import { Controller } from './controller.js';

//Bootstrap

let validationStrat = new validations.ValidationStrategy();
let boardDTOGenerator = new generators.BoardDTOGenerator();
let boardOrch = new model.BoardOrchestrator(validationStrat, boardDTOGenerator);

let initialBoard = boardOrch.getBoardDTO();

let view = new views.View(initialBoard);

let controller = new Controller(view, boardOrch);
controller.bindAll();