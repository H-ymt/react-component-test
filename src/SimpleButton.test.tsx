import { render, screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import { SimpleButton } from "./SimpleButton";

test("ボタンをクリックするとON/OFFの表示が切り替わる", async () => {
  const user = useEvent.setup();
  render(<SimpleButton />);
  const simpleButton = screen.getByRole("button"); // DOMを取得
  expect(simpleButton).toHaveTextContent("OFF"); // OFFのテキストを持っているか確認
  await user.click(simpleButton); // ボタンをクリック
  expect(simpleButton).toHaveTextContent("ON"); // ONのテキストを持っているか確認
});


test("描画されてすぐはOFFと表示されている", () => {
    const view = render(<SimpleButton />);
    expect(view.container).toMatchSnapshot();
  });