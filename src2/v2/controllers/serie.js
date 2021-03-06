import Serie from '../models/serie';

class SerieController{
  constructor(Serie){
    this.Serie = Serie;
  }

  async getAllSeries(filter = {}){
    const query = {};

    if(filter._id){
      query._id = filter._id;
    }
    if (filter.name) {
      query.name = new RegExp(filter.name, 'i');
    }
    const serie = await this.Serie.find(query);
    return serie;
  }

  async updateSerie(filter = {}){
    const query = {};

    if(filter._id){
      query._id = filter._id;
    }

    const serie = await Serie.findById(query);

    if(filter.body.name){
      serie.name = filter.body.name;
    }
    if(filter.body.status){
      serie.status = filter.body.status;
    }

    return await serie.save();
  }
}

export default new SerieController(Serie);