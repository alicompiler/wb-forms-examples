import {DefaultServiceFactory, SubmitService} from 'wb-forms';

export class LogServiceFactory extends DefaultServiceFactory {

    createSubmitService(): SubmitService {

        return new class implements SubmitService {
            submit(): Promise<void> {
                console.log('Submit Form');
                return Promise.resolve();
            }
        };
    }

}
