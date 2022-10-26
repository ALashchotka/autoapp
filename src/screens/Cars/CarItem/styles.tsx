import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    margin: 16,
    backgroundColor: "#FAFAFA",
    borderRadius: 10,
  },
  containerHidden: {
    height: 55,
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 8,
    backgroundColor: "#CCCCCC",
  },
  content: {
    padding: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "500",
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
  },
  diffPrice: {
    fontSize: 14,
    fontWeight: "400",
  },
  tableContainer: {
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  traderText: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: "400",
  },

  date: {
    marginTop: 8,
    fontSize: 12,
    textAlign: "right",
  },

  deletedContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#00000060",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  deletedText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  visibilityContainer: {
    position: "absolute",
    top: 8,
    right: 8,
    padding: 8,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
  },
  visibilityIcon: {
    color: "#000000",
    fontSize: 24,
  },
});
