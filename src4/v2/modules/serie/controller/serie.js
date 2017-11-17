import Serie from '../model/serie';

class SerieController{
  constructor(Serie){
    this.Serie = Serie;
  }

  async getAllSeries(filter = {}){
    const query = {};

    if(filter._id){
      query._id = filter._id;
    }

    if(filter.name){
      query.name = new RegExp(filter.name, 'i');
    }
    return await Serie.find(query);
  }

  async updateSerie(filter = {}){
    const mutate = {};

    if(filter._id){
      mutate._id = filter._id;
    }

    const serie = await Serie.findById(mutate);

    if(filter.body.name){
      serie.name = filter.body.name;
    }
    if(filter.body.status){
      serie.status = filter.body.status;
    }
    return await serie.save();
  }

  async create(filter = {}){
    const serie = {};

    if(filter.name){
      serie.name = filter.name;
    }
    if(filter.status){
      serie.status = filter.status;
    }
    if(filter.comments){
      serie.comments = filter.comments;
    }
    const newSerie = await Serie.create(serie);

    return newSerie;
  }
}

export default new SerieController(Serie);