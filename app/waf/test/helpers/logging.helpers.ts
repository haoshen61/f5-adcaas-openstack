import {sinon} from '@loopback/testlab';
import {MySequence} from '../../src/sequence';
import {AbstractLogger} from 'typescript-logging';

let logRequest: sinon.SinonStub;
let logResponse: sinon.SinonStub;
let consoleLog: sinon.SinonStub;

let loggerFuncs: {[key: string]: sinon.SinonStub} = {};

export function stubLogging(): void {
  logRequest = sinon.stub(MySequence.prototype, 'logRequest');
  logRequest.callsFake(() => {});

  logResponse = sinon.stub(MySequence.prototype, 'logResponse');
  logResponse.callsFake(() => {});
}

export function restoreLogging(): void {
  logRequest.restore();
  logResponse.restore();
}

export function stubConsoleLog(): void {
  consoleLog = sinon.stub(console, 'log');
  consoleLog.callsFake(() => {});
}

export function restoreConsoleLog(): void {
  consoleLog.restore();
}

// TODO: combine the above logging stubs.
export function stubLogger() {
  let fakeFunc = () => {};

  loggerFuncs['trace'] = sinon.stub(AbstractLogger.prototype, 'trace');
  loggerFuncs['debug'] = sinon.stub(AbstractLogger.prototype, 'debug');
  loggerFuncs['info'] = sinon.stub(AbstractLogger.prototype, 'info');
  loggerFuncs['warn'] = sinon.stub(AbstractLogger.prototype, 'warn');
  loggerFuncs['error'] = sinon.stub(AbstractLogger.prototype, 'error');
  loggerFuncs['fatal'] = sinon.stub(AbstractLogger.prototype, 'fatal');

  for (let f of Object.keys(loggerFuncs)) {
    loggerFuncs[f].callsFake(fakeFunc);
  }
}

export function restoreLogger() {
  for (let f of Object.keys(loggerFuncs)) {
    loggerFuncs[f].restore();
  }
}
