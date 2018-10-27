import { OrderDatePipe } from './order-date.pipe';

describe('OrderDatePipe', () => {
  it('create an instance', async (done) => {
    const pipe = new OrderDatePipe();
    await expect(pipe).toBeTruthy();
    done();
  });
});
