import { TrueFalsePipePipe } from './true-false-pipe.pipe';

describe('TrueFalsePipePipe', () => {
  let pipe : TrueFalsePipePipe;
  beforeEach(() =>{
    pipe = new TrueFalsePipePipe()
  });
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });
  it('Should return SI ', () =>{
    expect(pipe.transform(true)).toBe("SI");
  })
  it('Should return NO', ()=>{
    expect(pipe.transform(false)).toBe("NO")
  })
});



