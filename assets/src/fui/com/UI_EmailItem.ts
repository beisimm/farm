/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_EmailItem extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_c2:fgui.Controller;
	public m_n7:fgui.GImage;
	public m_n8:fgui.GImage;
	public m_tittle:fgui.GTextField;
	public m_date:fgui.GTextField;
	public m_n13:fgui.GGroup;
	public m_tittle2:fgui.GTextField;
	public m_date2:fgui.GTextField;
	public m_n14:fgui.GGroup;
	public m_n15:fgui.GImage;
	public m_n16:fgui.GImage;
	public static URL:string = "ui://cu1uq9ugr5yfhl";

	public static createInstance():UI_EmailItem {
		return <UI_EmailItem>(fgui.UIPackage.createObject("com", "EmailItem"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getController("c1");
		this.m_c2 = this.getController("c2");
		this.m_n7 = <fgui.GImage>(this.getChild("n7"));
		this.m_n8 = <fgui.GImage>(this.getChild("n8"));
		this.m_tittle = <fgui.GTextField>(this.getChild("tittle"));
		this.m_date = <fgui.GTextField>(this.getChild("date"));
		this.m_n13 = <fgui.GGroup>(this.getChild("n13"));
		this.m_tittle2 = <fgui.GTextField>(this.getChild("tittle2"));
		this.m_date2 = <fgui.GTextField>(this.getChild("date2"));
		this.m_n14 = <fgui.GGroup>(this.getChild("n14"));
		this.m_n15 = <fgui.GImage>(this.getChild("n15"));
		this.m_n16 = <fgui.GImage>(this.getChild("n16"));
	}
}