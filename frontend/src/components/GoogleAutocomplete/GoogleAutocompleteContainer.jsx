

let mapStateToProps = (state) => {
  return {
    route: state.route,
  };
};

export default connect(mapStateToProps, { routePostAC })(Google);
