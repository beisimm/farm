/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_shifei extends fgui.GComponent {

	public m_n0:fgui.GImage;
	public m_n6:fgui.GMovieClip;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://cu1uq9ugtyh39i";

	public static createInstance():UI_shifei {
		return <UI_shifei>(fgui.UIPackage.createObject("com", "shifei"));
	}

	protected onConstruct():void {
		this.m_n0 = <fgui.GImage>(this.getChild("n0"));
		this.m_n6 = <fgui.GMovieClip>(this.getChild("n6"));
		this.m_t0 = this.getTransition("t0");
	}
}