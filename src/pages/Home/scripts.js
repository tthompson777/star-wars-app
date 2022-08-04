import API from "../../api";
import BabyYoda from "../../assets/img/baby_yoda.png";

export default {
  name: 'Home',
  data() {
    return {
      lengthPersons: 6, // Iniciando com 6 personagens
      listPersons: [],
    }
  },
  computed: {
    // Listando itens depois de carrgar mais
    listPersonsLoaded() {
      return this.listPersons?.slice(0, this.lengthPersons);
    },
    getBaby() {
      return BabyYoda;
    },
  },
  mounted() {
    this.getAll();
  },
  methods: {
    // Chama os personagens
    getAll() {
      API.get('all.json')
        .then((res) => {
          this.listPersons = res.data;
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // Carregar mais
    loadMore() {
      if (this.lengthPersons > this.listPersons.length) return;
      this.lengthPersons = this.lengthPersons + 3;
    },
  },
}