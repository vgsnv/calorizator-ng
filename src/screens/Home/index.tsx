import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import toProducts from "./thunks/toProducts";
import toDiary from "./thunks/toDiary";

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toProducts: nav => dispatch(toProducts(nav)),
  toDiary: nav => dispatch(toDiary(nav))
});

const headerOptions = {
  headerScreen: null,
  gesturesEnabled: true
};

export default NeedProps(
  mapStateToProps,
  mapDispatchToProps,
  Component,
  headerOptions
);
