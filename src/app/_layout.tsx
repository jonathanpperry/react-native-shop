import { Stack } from "expo-router";
import { AuthProvider } from "../providers/AuthProvider";

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack>
        <Stack.Screen
          name="(shop)"
          options={{ headerShown: false, title: "Shop" }}
        />
        <Stack.Screen
          name="categories"
          options={{ headerShown: true, title: "Categories" }}
        />
        <Stack.Screen
          name="product"
          options={{ headerShown: true, title: "Product" }}
        />
        <Stack.Screen
          name="cart"
          options={{ presentation: "modal", title: "Shopping Cart" }}
        />
        <Stack.Screen name="auth" options={{ headerShown: false }} />
      </Stack>
    </AuthProvider>
  );
}
