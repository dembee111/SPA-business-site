<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <edit-profile-form data-background-color="green">

        </edit-profile-form>
      </div>

      <div class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100">
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">Хэрэглэгчийн жагсаалт</h4>
            <p class="category">Үйлчлүүлэгчийн дэлгэрэнгүй жагсаалт</p>
          </md-card-header>
          <md-card-content>
            <simple-table table-header-color="green"></simple-table>
          </md-card-content>
        </md-card>
      </div>

    </div>
  </div>
</template>

<script>
import {EditProfileForm} from '@/pages'
import {SimpleTable} from '@/pages'

export default{
  components: {
    EditProfileForm,
    SimpleTable
    
  }
}
</script>
