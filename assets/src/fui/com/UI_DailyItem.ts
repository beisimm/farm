/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_DailyItemBtn from "./UI_DailyItemBtn";

export default class UI_DailyItem extends fgui.GComponent {

	public m_n12:fgui.GImage;
	public m_pic:fgui.GLoader;
	public m_name:fgui.GTextField;
	public m_getBtn:UI_DailyItemBtn;
	public m_list:fgui.GList;
	public static URL:string = "ui://cu1uq9ugtyh3d9";

	public static createInstance():UI_DailyItem {
		return <UI_DailyItem>(fgui.UIPackage.createObject("com", "DailyItem"));
	}

	protected onConstruct():void {
		this.m_n12 = <fgui.GImage>(this.getChild("n12"));
		this.m_pic = <fgui.GLoader>(this.getChild("pic"));
		this.m_name = <fgui.GTextField>(this.getChild("name"));
		this.m_getBtn = <UI_DailyItemBtn>(this.getChild("getBtn"));
		this.m_list = <fgui.GList>(this.getChild("list"));
	}
}