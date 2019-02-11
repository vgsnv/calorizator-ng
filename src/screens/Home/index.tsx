import Component, { Props, Dispatch } from "./Component";
import NeedProps from "../../components/needProps/needProps";

import toProducts from "./thunks/toProducts";
import toDefault from "./thunks/toDefault";

type MapStateToProps = Props;

const mapStateToProps = (state): MapStateToProps => ({});

type MapDispatchToProps = Dispatch;

const mapDispatchToProps = (dispatch): MapDispatchToProps => ({
  toProducts: nav => dispatch(toProducts(nav)),
  toDefault: nav => dispatch(toDefault(nav))
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
