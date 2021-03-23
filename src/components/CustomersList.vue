<template>
    <div>
        <ul>
            <li v-for="(customer, index) in customers" :key="index">
                <router-link :to="{name: 'customer-details', params: { name: customer.name, id: index + 1 }}">
                    {{customer.name}}
                </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: "CustomerList"
};
</script>