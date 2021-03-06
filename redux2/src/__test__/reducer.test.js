import reducer from '../reducers';

describe('Reducer testing' ,() => {
    it('Should return intial state',() => {
        expect(JSON.stringify(reducer(undefined,{}))).toEqual(JSON.stringify({
            articles:{},
            gallery:{}
        }))
    })

    it('reducer test for action',() => {
        let state={
            articles:[],
            gallery:[]
        }

        state = reducer(state,{action:'GET_ARTICLES'});

        expect(state).toEqual({
            articles:[],
            gallery:[]
        })
    })
})