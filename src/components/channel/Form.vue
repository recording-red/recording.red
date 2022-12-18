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
  </div>
</template>

<style>
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
</style>

<script lang="ts">
export default {
  name: "Form",

  data() {
    return {
      name: "name",
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
        { id: 2, name: "English", selected: false },
        { id: 3, name: "Deutsch", selected: false },
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
