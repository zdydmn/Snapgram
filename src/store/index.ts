import { defineStore } from 'pinia'


export const useUserInfoStore = defineStore('userInfo', {
    state: () => ({
        name: 'Lewis Hamilton',
        header_img: 'src/assets/header.png'
    })
})
