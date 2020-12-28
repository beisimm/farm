/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_DailyItemBtn extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_n7:fgui.GImage;
	public m_n8:fgui.GTextField;
	public m_n10:fgui.GGroup;
	public m_n9:fgui.GImage;
	public m_n11:fgui.GTextField;
	public m_n12:fgui.GGroup;
	public m_n13:fgui.GImage;
	public m_n14:fgui.GTextField;
	public m_n15:fgui.GGroup;
	public static URL:string = "ui://cu1uq9ugtyh3db";

	public static createInstance():UI_DailyItemBtn {
		return <UI_DailyItemBtn>(fgui.UIPackage.createObject("com", "DailyItemBtn"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_n8 = <fgui.GTextField>(this.getChild("n8"));
		this.m_n10 = <fgui.GGroup>(this.getChild("n10"));
		this.m_n9 = <fgui.GImage>(this.getChild("n9"));
		this.m_n11 = <fgui.GTextField>(this.getChild("n11"));
		this.m_n12 = <fgui.GGroup>(this.getChild("n12"));
		this.m_n13 = <fgui.GImage>(this.getChild("n13"));
		this.m_n14 = <fgui.GTextField>(this.getChild("n14"));
		this.m_n15 = <fgui.GGroup>(this.getChild("n15"));
	}
}