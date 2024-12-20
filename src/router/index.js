import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes: [
      {
         // path: "/",
         //       name: "home",
         //       component: () => import("@/pages/home/Home.vue"),
         path: "/",
         component: () => import("@/layout/AppLayout.vue"),
         children: [
            {
               path: "",
               name: "home",
               component: () => import("@/pages/home/Home.vue"),
               children: [
                  {
                     path: ":uri",
                     name: "homeContent",
                     component: () => import("@/pages/home/Content.vue"),
                     props: true,
                  },
               ],
            },
         ],
      },
   ],
});

export default router;
