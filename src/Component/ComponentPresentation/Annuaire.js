import React, { Component } from "react";
import "../../assets/css/Annuaire.css";
import "../../assets/css/main.css";

class Annuaire extends Component {
  render() {
    return (
      <div
        style={{
          marginTop: "50px",
        }}
        className="row "
      >
        <div className="medium-12 columns">
          <section class="Annuaire section-padding" id="Annuaire">
            <h2 class="font-weight-bold mb-5 text-center">
              Annuaire des membres HOAG Prime
            </h2>

            <form class="form-inline">
              <div class="form-group mx-sm-3 mb-2">
                <select id="activite" class="form-control">
                  <optgroup label="Group 1">
                    <option>Item 1</option>
                    <option>Item 2</option>
                    <option>Item 3</option>
                  </optgroup>

                  <optgroup label="Group 2">
                    <option>Item 1</option>
                    <option>Item 2</option>
                    <option>Item 3</option>
                  </optgroup>
                </select>
              </div>
              <div class="form-group mx-sm-3 mb-2">
                <select id="activite" class="form-control">
                  <option selected>Code postal</option>
                  <option>101</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary mb-2">
                Rechercher
              </button>
            </form>

            <div class="row pb-5 mb-4">
              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded shadow-sm border-0">
                  <div class="card-body p-0">
                    <div class="bg-primary px-5 py-4 text-center card-img-top">
                      <img
                        src="https://scontent.ftnr5-1.fna.fbcdn.net/v/t1.18169-1/208567_454567907947137_1542154398_n.jpg?stp=dst-jpg_p148x148&_nc_cat=107&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=iD0Jk0RM34oAX-2PvYH&_nc_ht=scontent.ftnr5-1.fna&oh=00_AT8ngC62FQmnbMxNuCQiVkUmDQP7SsljjrkrrPA6FwI93g&oe=63537A44"
                        alt="..."
                        width="100"
                        class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
                      />
                      <h5 class="text-white mb-0">Orange</h5>
                      <p class="small text-white mb-0">Service client</p>
                    </div>
                    <div class="p-4 d-flex justify-content-center">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">241</h5>
                          <small class="text-muted">
                            <i class="fa fa-picture-o mr-1 text-primary"></i>
                            Photos
                          </small>
                        </li>
                        <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">84K</h5>
                          <small class="text-muted">
                            <i class="fa fa-user-circle-o mr-1 text-primary"></i>
                            Followers
                          </small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded shadow-sm border-0">
                  <div class="card-body p-0">
                    <div class="bg-success px-5 py-4 text-center card-img-top">
                      <a href="/basic">
                        <img
                          src="https://scontent.ftnr5-1.fna.fbcdn.net/v/t39.30808-1/294906691_121153020628283_1690318803606617192_n.jpg?stp=dst-jpg_p200x200&_nc_cat=104&ccb=1-7&_nc_sid=c6021c&_nc_ohc=9iEsFuTA8OIAX_CHs74&_nc_ht=scontent.ftnr5-1.fna&oh=00_AT84I3kRuhNprIZEXLQ3H1oFwGhgpTx9aS6OrjRcb8KpQg&oe=63320F01"
                          alt="..."
                          width="100"
                          class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
                        />
                      </a>
                      <h5 class="text-white mb-0">HOAG Target</h5>
                      <p class="small text-white mb-0">
                        Partenaire pour réussite commercial
                      </p>
                    </div>
                    <div class="p-4 d-flex justify-content-center">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">241</h5>
                          <small class="text-muted">
                            <i class="fa fa-picture-o mr-1 text-success"></i>
                            Photos
                          </small>
                        </li>
                        <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">84K</h5>
                          <small class="text-muted">
                            <i class="fa fa-user-circle-o mr-1 text-success"></i>
                            Followers
                          </small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded shadow-sm border-0">
                  <div class="card-body p-0">
                    <div class="bg-info px-5 py-4 text-center card-img-top">
                      <img
                        src="https://scontent.ftnr5-1.fna.fbcdn.net/v/t39.30808-1/302438013_523298009798834_2364972330894685515_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=c6021c&_nc_ohc=K_tdwUnZKOcAX-vAwol&_nc_ht=scontent.ftnr5-1.fna&oh=00_AT88YcZE__fGt_xHMS3hZhax__a_3MyqO6ZpSzCFxPRBNg&oe=6330AD2D"
                        alt="..."
                        width="100"
                        class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
                      />
                      <h5 class="text-white mb-0">Canal + Madagascar</h5>
                      <p class="small text-white mb-0">Programmes TV</p>
                    </div>
                    <div class="p-4 d-flex justify-content-center">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">241</h5>
                          <small class="text-muted">
                            <i class="fa fa-picture-o mr-1 text-info"></i>Photos
                          </small>
                        </li>
                        <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">84K</h5>
                          <small class="text-muted">
                            <i class="fa fa-user-circle-o mr-1 text-info"></i>
                            Followers
                          </small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
                <div class="card rounded shadow-sm border-0">
                  <div class="card-body p-0">
                    <div class="bg-warning px-5 py-4 text-center card-img-top">
                      <img
                        src="https://scontent.ftnr5-1.fna.fbcdn.net/v/t39.30808-1/271264395_109656791594342_2478975369122283378_n.jpg?stp=dst-jpg_p200x200&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_ohc=3yCH1ryOXjgAX8V3Rbd&_nc_ht=scontent.ftnr5-1.fna&oh=00_AT-YMAs4yE-mTY5QRMB3Hi8pkUwbza5y6Aol4KD4M6_ubQ&oe=6331DF3E"
                        alt="..."
                        width="100"
                        class="rounded-circle mb-2 img-thumbnail d-block mx-auto"
                      />
                      <h5 class="text-white mb-0">BOA Madagascar</h5>
                      <p class="small text-white mb-0">
                        Bank of Africa est une banque africaine multinationale,
                        filiale du groupe marocain BMCE
                      </p>
                    </div>
                    <div class="p-4 d-flex justify-content-center">
                      <ul class="list-inline mb-0">
                        <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">241</h5>
                          <small class="text-muted">
                            <i class="fa fa-picture-o mr-1 text-warning"></i>
                            Photos
                          </small>
                        </li>
                        <li class="list-inline-item">
                          <h5 class="font-weight-bold mb-0 d-block">84K</h5>
                          <small class="text-muted">
                            <i class="fa fa-user-circle-o mr-1 text-warning"></i>
                            Followers
                          </small>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
export default Annuaire;
