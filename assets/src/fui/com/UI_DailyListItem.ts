/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_DailyListItem extends fgui.GComponent {

	public m_pic:fgui.GLoader;
	public m_num:fgui.GTextField;
	public static URL:string = "ui://cu1uq9ugtyh3dd";

	public static createInstance():UI_DailyListItem {
		return <UI_DailyListItem>(fgui.UIPackage.createObject("com", "DailyListItem"));
	}

	protected onConstruct():void {
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_num = <fgui.GTextField>(this.getChild("num"));
	}
}