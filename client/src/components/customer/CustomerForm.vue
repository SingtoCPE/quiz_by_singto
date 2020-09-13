<!-- @format -->

<template>
  <div class="px-3">
    <validation-provider name="First Name" :rules="{required: true, max: 150}">
      <v-text-field
        v-model="CustomerInput.firstName"
        slot-scope="{errors}"
        prepend-inner-icon="mdi-alpha-f-circle"
        clearable
        dense
        label="First Name *"
        outlined
        required
        :error-messages="errors"
        :counter="150"
      />
    </validation-provider>

    <validation-provider name="Last Name" :rules="{required: true, max: 150}">
      <v-text-field
        v-model="CustomerInput.lastName"
        slot-scope="{errors}"
        prepend-inner-icon="mdi-alpha-l-circle"
        clearable
        dense
        label="Last Name *"
        outlined
        required
        :error-messages="errors"
        :counter="150"
      />
    </validation-provider>

    <validation-provider name="Phone" rules="max: 10">
      <v-text-field
        v-model="CustomerInput.phone"
        slot-scope="{errors}"
        prepend-inner-icon="mdi-phone"
        clearable
        dense
        label="Phone"
        outlined
        required
        :error-messages="errors"
        :counter="10"
      />
    </validation-provider>
    <span class="amber accent-1">
      <v-icon size="20px">mdi-alert-rhombus</v-icon>Fields with * require information to be filled in
    </span>
  </div>
</template>
<script>
export default {
  name: "CustomerForm",
  props: {
    isClearForm: {
      type: Boolean,
      default: false,
    },
    customerItem: {
      type: Object,
      default: () => ({
        firstName: "",
        lastName: "",
        phone: "",
      }),
    },
  },
  data: () => ({
    CustomerInput: {
      firstName: "",
      lastName: "",
      phone: "",
    },
  }),
  watch: {
    CustomerInput: {
      handler(value) {
        this.$emit("customer-input-change", value);
      },
      immediate: true,
      deep: true,
    },
    isClearForm: {
      handler(value) {
        if (value) {
          this.clearCustomerForm();
          this.$emit("reset-isclear-form");
        }
      },
      immediate: true,
    },
  },
  created() {
    this.setCustomerInput();
  },
  methods: {
    setCustomerInput() {
      if (this.customerItem) {
        this.CustomerInput.firstName = this.customerItem.firstName;
        this.CustomerInput.lastName = this.customerItem.lastName;
        this.CustomerInput.phone = this.customerItem.phone;
      }
    },
    clearCustomerForm() {
      this.CustomerInput.firstName = "";
      this.CustomerInput.lastName = "";
      this.CustomerInput.phone = "";
    },
  },
};
</script>
