<template>
  <div class="channel-form">
    <!-- Name -->
    <div class="channel-form-row">
      <div class="channel-form-item-label">
        <label for="channel-name">Votre chaîne s'appelle</label>
      </div>
      <div class="channel-form-item-value">
        <input id="channel-name" v-model="name" />
      </div>
    </div>

    <!-- Instrument -->
    <div class="channel-form-row">
      <div class="channel-form-item-label">
        <label for="channel-instrument">Et portera principalement sur</label>
      </div>
      <div class="channel-form-item-value">
        <select
          id="channel-instrument"
          v-model="selectedInstrument"
          @change="selectInstrument()"
        >
          <option
            v-for="opt in instrumentOptions"
            :key="opt.id"
            :label="opt.name"
            :value="opt.name"
            :selected="opt.selected"
          ></option>
        </select>
      </div>
    </div>

    <!-- Language -->
    <div class="channel-form-row">
      <div class="channel-form-item-label">
        <label for="channel-language"
          >Vous vous exprimerez principalement en</label
        >
      </div>
      <div class="channel-form-item-value">
        <select
          id="channel-language"
          v-model="selectedLanguage"
          @change="selectLanguage()"
        >
          <option
            v-for="opt in languageOptions"
            :key="opt.id"
            :label="opt.name"
            :value="opt.name"
            :selected="opt.selected"
          ></option>
        </select>
      </div>
    </div>

    <!-- Music Style -->
    <div class="channel-form-row">
      <div class="channel-form-item-label">
        <label for="channel-style">Sélectionnez vos styles de musique</label>
      </div>
      <div class="channel-form-item-value badge">
        <Badge value="blues" />
        <Badge value="finger picking" />
        <Badge value="funk" />
        <br />
        <Badge value="jazz" />
        <Badge value="metal" />
        <Badge value="neo soul" />
        <Badge value="reggae" />
        <br />
        <Badge value="rock'n roll" />
      </div>
    </div>
  </div>

  <!-- Delete -->
  <div class="channel-form-row delete">
    <button class="delete-button">Supprimer la chaine</button>
  </div>

  <!-- Cancel - Validate -->
  <div class="channel-form-row cancelvalidate">
    <button class="cancelvalidate-button">Annuler</button>
    <button class="cancelvalidate-button">Valider</button>
  </div>

</template>

<style lang="scss" scoped>
@import "src/assets/style.scss";

.channel-form-row {
  display: flex;
  justify-content: center;
  margin: 1em 0em 1em 0em;
}

.channel-form-item-label {
  text-align: right;
  padding: 0.5em 1em 0em 0em;
  width: 50vw;
}

.channel-form-item-value {
  padding-left: 1em;
  width: 50vw;
}

.channel-form-item-value input {
  width: 20em;
  padding: 0.25em 0.25em 0.25em 0.25em;
}

.channel-form-item-value select {
  width: 21em;
  padding: 0.3em 0.3em 0.3em 0.3em;
}

.badge {
  margin: 0px 5px 5px 0px;
}

.delete {
  margin: 0px 25px 0px 25px;
}

.delete-button {
  width: fit-content;
  padding: 10px 25px 10px 25px;
  font-size: large;
  background-color: $color-red;
  color: $color-white;
  border-radius: 15px;
  text-transform: uppercase;
}

.cancelvalidate {
  margin: 0px 25px 0px 25px;
}

.cancelvalidate-button {
  width: fit-content;
  min-width: 275px;
  padding: 10px 25px 10px 25px;
  font-size: large;
  background-color: $color-black;
  color: $color-white;
  border-radius: 15px;
  text-transform: uppercase;
}
</style>

<script lang="ts">
import Badge from "@/components/Badge.vue";

export default {
  name: "Form",

  components: { Badge },

  data() {
    return {
      name: "",
      instrument: 0,
      selectedInstrument: "",
      instrumentOptions: [
        { id: 1, name: "Guitare", selected: true },
        { id: 2, name: "Guitare Electrique", selected: false },
        { id: 3, name: "Basse", selected: false },
        { id: 4, name: "Batterie", selected: false },
      ],
      language: 0,
      selectedLanguage: "",
      languageOptions: [
        { id: 1, name: "Français", selected: true },
        { id: 2, name: "Anglais", selected: false },
        { id: 3, name: "Allemand", selected: false },
      ],
    };
  },

  methods: {
    selectInstrument() {
      this.instrumentOptions.map((opt) => {
        if (opt.name === this.selectedInstrument) {
          this.instrument = opt.id;
          return;
        }
      });
    },
    selectLanguage() {
      this.languageOptions.map((opt) => {
        if (opt.name === this.selectedLanguage) {
          this.language = opt.id;
          return;
        }
      });
    },
  },
};
</script>
