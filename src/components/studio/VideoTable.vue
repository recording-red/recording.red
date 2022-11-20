<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">Nom de la video</th>
        <th class="text-left">Categorie</th>
        <th class="text-left">Date d'upload</th>
        <th class="text-left">Vues</th>
        <th class="text-left">Likes</th>
        <th class="text-left">Stat</th>
        <th class="text-left">Statut</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in videos" :key="item.name">
        <td>{{ item.name }}</td>
        <td>{{ item.category }}</td>
        <td>{{ item.upload_date }}</td>
        <td>{{ item.views }}</td>
        <td>{{ item.likes }}</td>
        <td>stats</td>
        <td>{{ item.status }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script lang="ts">
export default {
  name: "VideoTable",

  data() {
    return {
      videos: [
        {
          name: "Titre 1",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 2",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 3",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 4",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 5",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 6",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 7",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 8",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 9",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 10",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
        {
          name: "Titre 11",
          category: "guitare",
          upload_date: "09 octobre 2022",
          views: 45000,
          likes: 23554,
          status: "online",
        },
      ],
    };
  },
};
</script>
