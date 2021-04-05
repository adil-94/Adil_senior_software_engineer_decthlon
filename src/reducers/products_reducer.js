import * as decathlonActions from '../constants/all_constants'

const initialState = {
    electronicsData: {
        laptop: ['https://rukminim1.flixcart.com/image/416/416/klcmoi80/computer/q/e/3/na-gaming-laptop-acer-original-imagyhwfgwhkf3vv.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/klcmoi80/computer/c/u/g/na-gaming-laptop-acer-original-imagyhwfpt5sz3jf.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/klcmoi80/computer/f/m/s/na-gaming-laptop-acer-original-imagyhwfzdgvamut.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/klcmoi80/computer/i/e/t/na-gaming-laptop-acer-original-imagyhwfy7hax2th.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/klcmoi80/computer/s/g/u/na-gaming-laptop-acer-original-imagyhwfs2fqn2cf.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/klcmoi80/computer/u/m/e/na-gaming-laptop-acer-original-imagyhwftjaukffz.jpeg?q=70'
        ],
        tv: ['https://rukminim1.flixcart.com/image/416/416/k2w6xe80/television/h/3/e/iffalcon-43k31-original-imafm59fudczqhuy.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/television-refurbished/3/8/r/b-55k31-iffalcon-original-imafkesznzphdbve.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/television-refurbished/3/8/r/b-55k31-iffalcon-original-imafkhjekyumqkyn.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/832/832/k0vbgy80pkrrdj/television-refurbished/3/8/r/b-55k31-iffalcon-original-imafgxegtpwfkfpt.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/television-refurbished/3/8/r/b-55k31-iffalcon-original-imafgxegx6avjsuq.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k0vbgy80pkrrdj/television-refurbished/3/8/r/b-55k31-iffalcon-original-imafgxegehhxvgcu.jpeg?q=70'
        ],
        trimmer: ['https://rukminim1.flixcart.com/image/416/416/k5txifk0/shaver/n/h/y/philips-one-blade-qp2525-original-imafjp8yhxzxphaw.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k3q76a80/trimmer/c/8/u/qp2525-10-philips-original-imafjph4pdkwe7fh.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k3q76a80/trimmer/c/8/u/qp2525-10-philips-original-imafjph5x47whhrd.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k3q76a80/trimmer/c/8/u/qp2525-10-philips-original-imafjrfhzwnpzz5a.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k3q76a80/trimmer/c/8/u/qp2525-10-philips-original-imafjph5efskpckh.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k3q76a80/trimmer/c/8/u/qp2525-10-philips-original-imafmskfgnzzkcga.jpeg?q=70'
        ],

        iphone: ['https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/z/a/f/iphone-11-pro-max-256-u-mwhm2hn-a-apple-0-original-imafkg2ftc5cze5n.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/3/n/m/iphone-11-pro-512-a-mwcg2hn-a-apple-0-original-imafkg2fbyxqbbnh.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/s/q/f/iphone-11-pro-64-a-mwc62hn-a-apple-0-original-imafkg2fdthzzn6n.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/y/z/4/iphone-11-pro-256-a-mwcc2hn-a-apple-0-original-imafkg2fjt3hsqun.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/y/z/4/iphone-11-pro-256-a-mwcc2hn-a-apple-0-original-imafkg2fe9umh73z.jpeg?q=70',
            'https://rukminim1.flixcart.com/image/416/416/kidgnm80-0/screen-guard/back-tempered-glass/s/h/t/b-iphone-12-d-y-original-imafy6gxvju7fudc.jpeg?q=70'
        ]
    },
    catagoriesData: {
        electronics: [{ id: 1, shortName: 'tv', name: 'Andriod TV', star: 4.5, price: 20000, src: 'https://images-na.ssl-images-amazon.com/images/I/91auveGcURL._SX679_.jpg' }, { id: 2, shortName: 'laptop', name: 'Dell Laptop', star: 4, price: 35000, src: 'https://images-na.ssl-images-amazon.com/images/I/61NsZ6UrfPL._SX679_.jpg' }, { id: 3, shortName: 'trimmer', name: 'Trimmer Mens', star: 3, price: 1000, src: 'https://images-na.ssl-images-amazon.com/images/I/718398O4TVL._SX679_.jpg' }, { id: 4, shortName: 'iphone', name: 'IPhone 12 pro', star: 5, price: 82000, src: 'https://images-na.ssl-images-amazon.com/images/I/71tpxtLD0aL._SX679_.jpg' }],
        fashions: [{ id: 0, name: 'Lycra Shirt', star: 4, price: 500, src: 'https://images-na.ssl-images-amazon.com/images/I/81ODQz6le0L._UY879_.jpg' }, { id: 1, name: 'G-Shock Watch', star: 4.5, price: 10000, src: 'https://images-na.ssl-images-amazon.com/images/I/81po%2BaXLQWL._UX679_.jpg' }, { id: 2, name: 'Loafers Mens', star: 4, price: 2000, src: 'https://images-na.ssl-images-amazon.com/images/I/71NIE74SlOL._UY695_.jpg' }, { id: 3, name: 'Kurtis womens', star: 3, price: 1000, src: 'https://images-na.ssl-images-amazon.com/images/I/91iGcfI6PvL._UY879_.jpg' }, { id: 4, name: 'Lycra Pant', star: 4, price: 500, src: 'https://images-na.ssl-images-amazon.com/images/I/51w087u0dJL._UY879_.jpg' }],
        groceries: [{ id: 0, name: 'Dabar Honey', star: 4, price: 500, src: 'https://images-na.ssl-images-amazon.com/images/I/81JeGn6W%2BKL._SX679_.jpg' }, { id: 1, name: 'Ashirvad aata', star: 4.5, price: 1000, src: 'https://images-na.ssl-images-amazon.com/images/I/819vYkT-VHL._SX679_.jpg' }, { id: 2, name: 'Dairy Milk', star: 4, price: 200, src: 'https://images-na.ssl-images-amazon.com/images/I/611PGZZxZvL._SX679_.jpg' }, { id: 3, name: 'Fortune Oil', star: 5, price: 2000, src: 'https://images-na.ssl-images-amazon.com/images/I/41fAkhF7UtL.jpg' }, { id: 4, name: 'Almonds', star: 4, price: 500, src: 'https://images-na.ssl-images-amazon.com/images/I/91izJLBgdYL._SX679_.jpg' }]
    }
}

const productReducer = (state = initialState, action) => {
    const newState = Object.assign({}, state);

    switch (action.type) {
        case decathlonActions.GET_CATOGORIES_DATA:
            newState.catagoriesData = action.payload;
            return newState

        case decathlonActions.GET_ELECTRONICS_DATA:
            newState.electronicsData = action.payload;
            return newState


        default:
            return state;
    }
};

export default productReducer;