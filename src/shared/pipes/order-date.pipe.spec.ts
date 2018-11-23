import { OrderDatePipe } from './order-date.pipe';

describe('OrderDatePipe', () => {
  it('create an instance', async (done) => {
    this.pipe = new OrderDatePipe();
    await expect(this.pipe).toBeTruthy();
    done();
  });
});
