<template>
  <div class="app-content-header">
    <div class="container-fluid">
      <!--begin::Row-->
      <div class="row">
        <div class="col-sm-6"><h3 class="mb-0">Supplier</h3></div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-end">
            <li class="breadcrumb-item"><a href="#">Setup</a></li>
            <li class="breadcrumb-item active" aria-current="page">Supplier</li>
          </ol>
        </div>
      </div>
      <!--end::Row-->
    </div>
  </div>
  <div class="app-content">
    <form>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-header">
                <h5 class="card-title mb-0">Add Supplier</h5>
              </div>
              <div class="card-body">
                <div class="mb-3 row">
                  <label class="col-form-label col-sm-2 text-sm-end">Supplier Name</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Supplier Name" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-form-label col-sm-2 text-sm-end">Contact Person</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Contact Person" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-form-label col-sm-2 text-sm-end">Phone</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Phone" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-form-label col-sm-2 text-sm-end">Email</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" placeholder="Email" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-form-label col-sm-2 text-sm-end">Address</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Address" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-form-label col-sm-2 text-sm-end">City</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="City" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-form-label col-sm-2 text-sm-end">Country</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Country" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-form-label col-sm-2 text-sm-end">Postal Code</label>
                  <div class="col-sm-10">
                    <input type="text" class="form-control" placeholder="Postal Code" />
                  </div>
                </div>
                <div class="mb-3 row">
                  <label class="col-form-label col-sm-2 text-sm-end">Notes</label>
                  <div class="col-sm-10">
                    <textarea class="form-control" rows="3" placeholder="Notes"></textarea>
                  </div>
                </div>
                <div class="mb-3 row">
                  <div class="col-sm-10 offset-sm-2">
                    <button type="submit" class="btn btn-primary">Save</button>
                    <button type="reset" class="btn btn-secondary" style="margin-left: 8px">
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>
