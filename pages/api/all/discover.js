import {countries} from '../../../datas/countriesData'


export default (req,res) => {
    res.status(200).json(countries)
}